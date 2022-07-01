// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./safeMath.sol";

interface IUniswapV2Router01 {
    function factory() external pure returns (address);

    function WETH() external pure returns (address);

    function addLiquidity(
        address tokenA,
        address tokenB,
        uint256 amountADesired,
        uint256 amountBDesired,
        uint256 amountAMin,
        uint256 amountBMin,
        address to,
        uint256 deadline
    )
        external
        returns (
            uint256 amountA,
            uint256 amountB,
            uint256 liquidity
        );

    function addLiquidityETH(
        address token,
        uint256 amountTokenDesired,
        uint256 amountTokenMin,
        uint256 amountETHMin,
        address to,
        uint256 deadline
    )
        external
        payable
        returns (
            uint256 amountToken,
            uint256 amountETH,
            uint256 liquidity
        );

    function removeLiquidity(
        address tokenA,
        address tokenB,
        uint256 liquidity,
        uint256 amountAMin,
        uint256 amountBMin,
        address to,
        uint256 deadline
    ) external returns (uint256 amountA, uint256 amountB);

    function removeLiquidityETH(
        address token,
        uint256 liquidity,
        uint256 amountTokenMin,
        uint256 amountETHMin,
        address to,
        uint256 deadline
    ) external returns (uint256 amountToken, uint256 amountETH);

    function removeLiquidityWithPermit(
        address tokenA,
        address tokenB,
        uint256 liquidity,
        uint256 amountAMin,
        uint256 amountBMin,
        address to,
        uint256 deadline,
        bool approveMax,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external returns (uint256 amountA, uint256 amountB);

    function removeLiquidityETHWithPermit(
        address token,
        uint256 liquidity,
        uint256 amountTokenMin,
        uint256 amountETHMin,
        address to,
        uint256 deadline,
        bool approveMax,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external returns (uint256 amountToken, uint256 amountETH);

    function swapExactTokensForTokens(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external returns (uint256[] memory amounts);

    function swapTokensForExactTokens(
        uint256 amountOut,
        uint256 amountInMax,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external returns (uint256[] memory amounts);

    function swapExactETHForTokens(
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external payable returns (uint256[] memory amounts);

    function swapTokensForExactETH(
        uint256 amountOut,
        uint256 amountInMax,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external returns (uint256[] memory amounts);

    function swapExactTokensForETH(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external returns (uint256[] memory amounts);

    function swapETHForExactTokens(
        uint256 amountOut,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external payable returns (uint256[] memory amounts);

    function quote(
        uint256 amountA,
        uint256 reserveA,
        uint256 reserveB
    ) external pure returns (uint256 amountB);

    function getAmountOut(
        uint256 amountIn,
        uint256 reserveIn,
        uint256 reserveOut
    ) external pure returns (uint256 amountOut);

    function getAmountIn(
        uint256 amountOut,
        uint256 reserveIn,
        uint256 reserveOut
    ) external pure returns (uint256 amountIn);

    function getAmountsOut(uint256 amountIn, address[] calldata path)
        external
        view
        returns (uint256[] memory amounts);

    function getAmountsIn(uint256 amountOut, address[] calldata path)
        external
        view
        returns (uint256[] memory amounts);
}

interface IUniswapV2Router02 is IUniswapV2Router01 {
    function removeLiquidityETHSupportingFeeOnTransferTokens(
        address token,
        uint256 liquidity,
        uint256 amountTokenMin,
        uint256 amountETHMin,
        address to,
        uint256 deadline
    ) external returns (uint256 amountETH);

    function removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(
        address token,
        uint256 liquidity,
        uint256 amountTokenMin,
        uint256 amountETHMin,
        address to,
        uint256 deadline,
        bool approveMax,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external returns (uint256 amountETH);

    function swapExactTokensForTokensSupportingFeeOnTransferTokens(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external;

    function swapExactETHForTokensSupportingFeeOnTransferTokens(
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external payable;

    function swapExactTokensForETHSupportingFeeOnTransferTokens(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external;
}

contract UniswapLocked {
    using SafeERC20 for IERC20;
    using SafeMath for uint256;

    // timestamp when token release is enabled
    uint256 private _releaseTime;

    uint256 private _priceInv;

    uint256 private _maxCap;

    uint256 private _mintedBalance;

    address private _owner;

    address private _deployer;

    uint256 private constant MAX_INT = 2**256 - 1;

    uint256 private constant BASE_PRICE = 100000;

    IERC20 private _token;

    IUniswapV2Router02 private _uniRouter;

    constructor(
        IUniswapV2Router02 uniRouter,
        uint256 releaseTime,
        address owner,
        uint256 priceInv
    ) public {
        require(
            releaseTime > block.timestamp,
            "UniswapLocked: release time is before current time"
        );
        _releaseTime = releaseTime;
        _uniRouter = uniRouter;
        _deployer = msg.sender;
        _priceInv = priceInv;
        _owner = owner;
    }

    function setupToken(IERC20 token) public {
        require(msg.sender == _deployer, "Only deployer can set Token");
        _token = token;
    }

    receive() external payable {}

    /**
     * @dev Add Liquidity to Uniswap at defined price, if no pool exists it will create one.
     *  Approve token for router, require contract to have the necessary tokens
     *
     */
    function addLiquidity() public {
        require(
            address(_token) != address(0),
            "UniswapLocked: Token can not be zero"
        );
        uint256 sysBalance = address(this).balance;
        uint256 tokensAmount = _priceInv.div(BASE_PRICE).mul(sysBalance);
        uint256 tokensAmountMin = tokensAmount.sub(
            _priceInv.div(BASE_PRICE).mul(sysBalance)
        );
        require(sysBalance > 0, "UniswapLocked: no sys to add liquidity");
        require(
            _token.balanceOf(address(this)) > 0,
            "UniswapLocked: no token balance to add liquidity"
        );
        require(
            msg.sender == address(_deployer),
            "UniswapLocked: Only deployer can call this function"
        );
        _token.approve(address(_uniRouter), MAX_INT);

        _uniRouter.addLiquidityETH(
            address(_token),
            tokensAmount,
            tokensAmount,
            sysBalance,
            address(this),
            block.timestamp + 100
        );
    }

    /**
     * @return the time when the tokens are released.
     */
    function releaseTime() public view returns (uint256) {
        return _releaseTime;
    }

    /**
     * @return the owner of the locked funds
     */
    function owner() public view returns (address) {
        return _owner;
    }

    /**
     * @notice Transfers tokens held by Lock to owner.
       @dev Able to withdraw LP funds after release time 
     */
    function release(IERC20 token) public {
        // solhint-disable-next-line not-rely-on-time
        require(
            block.timestamp >= _releaseTime,
            "UniswapLocked: current time is before release time"
        );

        uint256 amount = token.balanceOf(address(this));
        require(amount > 0, "UniswapLocked: no tokens to release");

        token.safeTransfer(_owner, amount);
    }

    /**
     * @notice Transfers SYS back to the owner
       @dev Function used only if it was not used all the SYS
     */
    function releaseSYS() public {
        // solhint-disable-next-line not-rely-on-time
        require(
            block.timestamp >= _releaseTime,
            "UniswapLocked: current time is before release time"
        );
        require(address(this).balance > 0, "UniswapLocked: no SYS to release");

        payable(owner()).transfer(address(this).balance);
    }
}

contract Launchpad is Ownable {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    /**
     * @dev  emitted when sold out
     *
     */
    event SoldOut();
    //  This value needs to be the same on UniswapLocked Contract
    uint256 private constant _BASE_PRICE = 100000000;

    uint256 private constant _totalPercent = 10000;

    uint256 private constant _fee1 = 100;

    uint256 private constant _fee3 = 300;

    address private constant _layerFeeAddress =
        0xfD2Bd27E15F05A97865441AcfefDcA2842D3192C;

    address private constant _supportFeeAddress =
        0xfD2Bd27E15F05A97865441AcfefDcA2842D3192C;

    address private constant _stakeFeeAddress =
        0xfD2Bd27E15F05A97865441AcfefDcA2842D3192C;

    mapping(address => uint256) private _balancesToClaim;

    mapping(address => uint256) private _balancesToClaimTokens;

    uint256 private _mintedLiquidity;

    uint256 private _liquidityPercent;

    uint256 private _teamPercent;

    uint256 private _end;

    uint256 private _start;

    uint256 private _releaseTime;
    // We use price inverted for better calculations
    uint256[3] private _priceInv;
    // We use price inverted for better calculations
    uint256[3] private _caps;

    // We use price inverted for better calculations
    uint256 private _priceUniInv;

    bool private _isRefunded = false;

    bool private _isSoldOut = false;

    bool private _isLiquiditySetup = false;

    uint256 private _raisedSYS;

    uint256 private _claimedAmount;

    uint256 private _softCap;

    uint256 private _maxCap;

    address private _teamWallet;

    address private _owner;

    address private _deployer;

    IERC20 private _token;

    UniswapLocked private _uniLocked;

    string private _tokenName;

    string private _siteUrl;

    string private _paperUrl;

    // string private _twitterUrl;

    // string private _telegramUrl;

    // string private _mediumUrl;

    // string private _gitUrl;

    // string private _discordUrl;

    string private _tokenDesc;

    uint256 private _tokenTotalSupply;

    uint256 private _tokensForSale;

    uint256 private _minContribution;

    uint256 private _maxContribution;

    uint256 private _round;

    bool private _uniListing;

    bool private _tokenMint;

    constructor(
        IUniswapV2Router02 uniRouter,
        IERC20 token,
        uint256 priceUniInv,
        uint256 softCap,
        uint256 maxCap,
        uint256 liquidityPercent,
        uint256 teamPercent,
        uint256 end,
        uint256 start,
        uint256 releaseTime,
        // uint256[3] memory caps,
        // uint256[3] memory priceInv,
        address owner // address teamWallet
    ) public {
        require(
            start > block.timestamp,
            "start time needs to be above current time"
        );
        require(
            releaseTime > block.timestamp,
            "release time above current time"
        );
        require(end > start, "End time above start time");
        require(liquidityPercent <= 3000, "Max Liquidity allowed is 30 %");
        // require(priceInv[0] > _BASE_PRICE, "Price lower than Base");
        require(priceUniInv > _BASE_PRICE, "Price Uni lower than Base");
        require(owner != address(0), "Not valid address");
        // require(caps.length > 0, "Caps can not be zero");
        // require(
        //     caps.length == priceInv.length,
        //     "Caps and price not same length"
        // );

        uint256 totalPercent = teamPercent
            .add(liquidityPercent)
            .add(_fee1.mul(2))
            .add(_fee3);
        require(
            totalPercent == _totalPercent,
            "Funds are distributed max 100 %"
        );
        // setup UniLocked token
        _uniLocked = new UniswapLocked(
            uniRouter,
            releaseTime,
            owner,
            priceUniInv
        );
        _softCap = softCap;
        _maxCap = maxCap;
        _start = start;
        _end = end;
        _liquidityPercent = liquidityPercent;
        _teamPercent = teamPercent;
        // _caps = caps;
        // _priceInv = priceInv;
        _owner = owner;
        _releaseTime = releaseTime;
        _token = token;
        // _teamWallet = teamWallet;
        _priceUniInv = priceUniInv;
        _deployer = msg.sender;
    }

    function setDetails(
        string memory tokenName,
        string memory siteUrl,
        string memory paperUrl,
        // string memory twitterUrl,
        // string memory telegramUrl,
        // string memory mediumUrl,
        // string memory gitUrl,
        // string memory discordUrl,
        string memory tokenDesc,
        uint256 tokensForSale,
        uint256 minContribution,
        uint256 maxContribution,
        uint256 tokenTotalSupply,
        bool uniListing,
        bool tokenMint
    ) external onlyOwner {
        require(msg.sender == _deployer, "Only deployer can set details.");
        _tokenName = tokenName;
        _siteUrl = siteUrl;
        _paperUrl = paperUrl;
        // _twitterUrl = twitterUrl;
        // _telegramUrl = telegramUrl;
        // _mediumUrl = mediumUrl;
        // _gitUrl = gitUrl;
        // _discordUrl = discordUrl;
        _tokenDesc = tokenDesc;
        _tokensForSale = tokensForSale;
        _minContribution = minContribution;
        _maxContribution = maxContribution;
        _uniListing = uniListing;
        _tokenMint = tokenMint;
        _tokenTotalSupply = tokenTotalSupply;
    }

    function getStatus()
        public
        view
        returns (
            bool,
            bool,
            bool,
            bool
        )
    {
        return (_isSoldOut, _isRefunded, _uniListing, _tokenMint);
    }

    function getDetails()
        public
        view
        returns (
            string memory,
            bool,
            bool,
            bool,
            bool
        )
    {
        uint256 liquidityLock = _maxCap.mul(_liquidityPercent).div(
            _totalPercent
        );
        string memory res = append(
            toString(_tokenTotalSupply),
            "|",
            toString(_tokensForSale),
            "|",
            toString(_maxContribution)
        );
        res = append(
            res,
            "|",
            toString(_minContribution),
            "|",
            toString(_maxCap)
        );
        res = append(res, "|", toString(_softCap), "|", toString(_raisedSYS));
        res = append(
            res,
            "|",
            toString(_priceUniInv),
            "|",
            toString(liquidityLock)
        );
        res = append(res, "|", toString(_start), "|", toString(_end));
        res = append(
            res,
            "|",
            toString(_releaseTime),
            "|",
            toString(_liquidityPercent)
        );
        res = append(res, "|", toString(_teamPercent), "|", toString(_round));
        res = append(res, "|", toString(_owner), "|", toString(_teamWallet));
        res = append(res, "|", _siteUrl, "|", _paperUrl);
        // res = append(res, "|", _twitterUrl, "|", _telegramUrl);
        // res = append(res, "|", _mediumUrl, "|", _gitUrl);
        // res = append(res, "|", _discordUrl, "|", _tokenName);
        res = append(res, "|", _tokenDesc, "", "");
        return (res, _isSoldOut, _isRefunded, _uniListing, _tokenMint);
    }

    function getMinInfos()
        public
        view
        returns (
            string memory siteUrl,
            string memory tokenName,
            bool isRefunded,
            bool isSoldOut,
            uint256 start,
            uint256 end,
            uint256 softCap,
            uint256 maxCap,
            uint256 raisedSYS
        )
    {
        siteUrl = _siteUrl;
        tokenName = _tokenName;
        isRefunded = _isRefunded;
        isSoldOut = _isSoldOut;
        start = _start;
        end = _end;
        softCap = _softCap;
        maxCap = _maxCap;
        raisedSYS = _raisedSYS;
    }

    function getCapSize() public view returns (uint256) {
        return _caps.length;
    }

    function getCapPrice(uint256 index)
        public
        view
        returns (
            uint256,
            uint256,
            uint256
        )
    {
        return (
            _caps[index],
            _priceInv[index].div(_BASE_PRICE),
            (_priceInv[index].mul(_caps[index]).div(_BASE_PRICE))
        );
    }

    function end() public view returns (uint256) {
        return _end;
    }

    /**
     *
     */
    function claimedAmount() public view returns (uint256) {
        return _claimedAmount;
    }

    /**
     *
     */
    function start() public view returns (uint256) {
        return _start;
    }

    /**
     *
     */
    function softCap() public view returns (uint256) {
        return _softCap;
    }

    /**
     *
     */
    function maxCap() public view returns (uint256) {
        return _maxCap;
    }

    /**
     *
     */
    function isSoldOut() public view returns (bool) {
        return _isSoldOut;
    }

    /**
     *
     */
    function isRefunded() public view returns (bool) {
        return _isRefunded;
    }

    /**
     *
     */
    function uniLocked() public view returns (address) {
        return address(_uniLocked);
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceToClaim(address account) public view returns (uint256) {
        return _balancesToClaim[account];
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceToClaimTokens(address account)
        public
        view
        returns (uint256)
    {
        return _balancesToClaimTokens[account];
    }

    /**
     * When receive SYS mint tokens internally and save a storage reference.
     * Launchpad needs to not have refunded, and nethier sold out
     *
     */
    receive() external payable {
        require(block.timestamp > start(), "LaunchpadToken: not started yet");
        require(block.timestamp < end(), "LaunchpadToken: finished");
        require(_isRefunded == false, "LaunchpadToken: Refunded is activated");
        require(_isSoldOut == false, "LaunchpadToken: SoldOut");
        uint256 amount = msg.value;
        uint256 price = _priceInv[0];
        require(
            amount > 0,
            "LaunchpadToken: SYS value sent needs to be above zero"
        );

        _raisedSYS = _raisedSYS.add(amount);
        for (uint256 index = 0; index < _caps.length; index++) {
            if (_raisedSYS > _caps[index]) {
                price = _priceInv[index];
                _round = index;
                break;
            }
        }

        _balancesToClaim[msg.sender] = _balancesToClaim[msg.sender].add(amount);
        _balancesToClaimTokens[msg.sender] = _balancesToClaimTokens[msg.sender]
            .add(amount.mul(price));

        if (_raisedSYS > _maxCap) {
            _isSoldOut = true;
            uint256 refundAmount = _raisedSYS.sub(_maxCap);
            if (refundAmount > 0) {
                // Subtract value that is higher than maxCap
                _balancesToClaim[msg.sender] = _balancesToClaim[msg.sender].sub(
                    refundAmount
                );
                _balancesToClaimTokens[msg.sender] = _balancesToClaimTokens[
                    msg.sender
                ].sub(amount.mul(price));
                payable(msg.sender).transfer(refundAmount);
            }
            emit SoldOut();
        }

        emit Received(msg.sender, amount);
    }

    /**
     * @dev Claim tokens to user, after release time
     * If project not reached softcap funds are returned back
     */
    function claim() public returns (bool) {
        // if sold out no need to wait for the time to finish, make sure liquidity is setup
        require(
            block.timestamp >= end() || (!_isSoldOut && _isLiquiditySetup),
            "LaunchpadToken: sales still going on"
        );
        require(
            _balancesToClaim[msg.sender] > 0,
            "LaunchpadToken: No SYS to claim"
        );
        require(
            _balancesToClaimTokens[msg.sender] > 0,
            "LaunchpadToken: No SYS to claim"
        );
        // require(_isRefunded != false , "LaunchpadToken: Refunded is activated");
        uint256 amount = _balancesToClaim[msg.sender];
        _balancesToClaim[msg.sender] = 0;
        uint256 amountTokens = _balancesToClaimTokens[msg.sender];
        _balancesToClaimTokens[msg.sender] = 0;
        if (_isRefunded) {
            // return back funds
            payable(msg.sender).transfer(amount);
            emit Refunded(msg.sender, amount);
            return true;
        }
        // Transfer Tokens to User
        _token.safeTransfer(msg.sender, amountTokens);
        _claimedAmount = _claimedAmount.add(amountTokens);
        emit Claimed(msg.sender, amountTokens);
        return true;
    }

    /**
     * Setup liquidity and transfer all amounts according to defined percents, if softcap not reached set Refunded flag
     */
    function setupLiquidity() public {
        require(
            _isSoldOut == true || block.timestamp > end(),
            "LaunchpadToken: not sold out or time not elapsed yet"
        );
        require(_isRefunded == false, "Launchpad: refunded is activated");
        //
        if (_raisedSYS < _softCap) {
            _isRefunded = true;
            return;
        }
        _uniLocked.setupToken(_token);
        uint256 sysBalance = address(this).balance;
        require(
            sysBalance > 0,
            "LaunchpadToken: sys balance needs to be above zero"
        );
        uint256 liquidityAmount = sysBalance.mul(_liquidityPercent).div(
            _totalPercent
        );
        uint256 tokensAmount = _token.balanceOf(address(this));
        require(
            tokensAmount >= liquidityAmount.mul(_priceUniInv).div(_BASE_PRICE),
            "Launchpad: Not sufficient tokens amount"
        );
        uint256 teamAmount = sysBalance.mul(_teamPercent).div(_totalPercent);
        uint256 layerFeeAmount = sysBalance.mul(_fee3).div(_totalPercent);
        uint256 supportFeeAmount = sysBalance.mul(_fee1).div(_totalPercent);
        uint256 stakeFeeAmount = sysBalance.mul(_fee1).div(_totalPercent);
        payable(_layerFeeAddress).transfer(layerFeeAmount);
        payable(_supportFeeAddress).transfer(supportFeeAmount);
        payable(_stakeFeeAddress).transfer(stakeFeeAmount);
        payable(_teamWallet).transfer(teamAmount);
        payable(_uniLocked).transfer(liquidityAmount);
        _token.safeTransfer(
            address(_uniLocked),
            liquidityAmount.mul(_priceUniInv).div(_BASE_PRICE)
        );
        _uniLocked.addLiquidity();
        _isLiquiditySetup = true;
    }

    /**
     * @notice Transfers non used tokens held by Lock to owner.
       @dev Able to withdraw funds after end time and liquidity setup, if refunded is enabled just let token owner 
       be able to withraw 
     */
    function release(IERC20 token) public {
        uint256 amount = token.balanceOf(address(this));
        if (_isRefunded) {
            token.safeTransfer(_owner, amount);
        }
        // solhint-disable-next-line not-rely-on-time
        require(
            block.timestamp >= end() || _isSoldOut == true,
            "Launchpad: current time is before release time"
        );
        require(_isLiquiditySetup == true, "Launchpad: Liquidity is not setup");
        // TO Define: Tokens not claimed should go back to time after release time?
        require(
            _claimedAmount == _raisedSYS || block.timestamp >= _releaseTime,
            "Launchpad: Tokens still to be claimed"
        );
        require(amount > 0, "Launchpad: no tokens to release");

        token.safeTransfer(_owner, amount);
    }

    function toString(address account) internal pure returns (string memory) {
        return toString(abi.encodePacked(account));
    }

    function toString(uint256 value) internal pure returns (string memory) {
        return toString(abi.encodePacked(value));
    }

    function toString(bytes32 value) internal pure returns (string memory) {
        return toString(abi.encodePacked(value));
    }

    function toString(bytes memory data) internal pure returns (string memory) {
        bytes memory alphabet = "0123456789abcdef";

        bytes memory str = new bytes(2 + data.length * 2);
        str[0] = "0";
        str[1] = "x";
        for (uint256 i = 0; i < data.length; i++) {
            str[2 + i * 2] = alphabet[uint256(uint8(data[i] >> 4))];
            str[3 + i * 2] = alphabet[uint256(uint8(data[i] & 0x0f))];
        }
        return string(str);
    }

    /**
     * @dev Emitted when tokens are minted on the fallback Received
     *
     * Note that `value` may be zero.
     */
    event Received(address indexed from, uint256 value);
    /**
     * @dev Emitted when tokens are claimed by user
     *
     */
    event Claimed(address indexed from, uint256 value);
    /**
     * @dev Emitted when refunded if not successful
     *
     */
    event Refunded(address indexed from, uint256 value);

    function append(
        string memory a,
        string memory b,
        string memory c,
        string memory d,
        string memory e
    ) internal pure returns (string memory) {
        return string(abi.encodePacked(a, b, c, d, e));
    }
}
