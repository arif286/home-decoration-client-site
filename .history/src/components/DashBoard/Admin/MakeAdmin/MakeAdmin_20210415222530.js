import React from 'react';

const MakeAdmin = () => {
    return (
        <div>
            <form>
                <label>Email</label>
                <input type='email' placeholder='example@gmail.com' />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default MakeAdmin;