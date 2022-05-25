import React from 'react';

const Settings = () => {
    return (
        <div className='settingStyle mt-4'>
            <div className='slider-text'>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>

                </label>
                <p>Security Settings</p>
            </div>

            <div className='slider-text mt-2'>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>

                </label>
                <p>Alert me by email in case of unusual activity in my account</p>
            </div>
            <div className='buyMoreBtn mt-5'>
                <button className='mt-5'>Update Profile <i class="fa-solid fa-floppy-disk mx-1"></i></button>
            </div>
        </div>
    );
};

export default Settings;