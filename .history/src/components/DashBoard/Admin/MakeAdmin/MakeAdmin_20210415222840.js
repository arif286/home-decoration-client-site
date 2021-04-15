import React from 'react';

const MakeAdmin = () => {
    return (
        <div>
            <form>
                <label>Email</label>
                <input className='form-control' type='email' placeholder='example@gmail.com' />
                <button className='admin-button' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default MakeAdmin;