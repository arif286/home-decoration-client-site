import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [modifyService, setModifyService] = useState([]);
    useEffect(() => {
        axios
          .get("https://interior-design-service.herokuapp.com/services")
          .then((res) => setModifyService(res.data))
          .catch((err) => console.log(err));
    }, []);
    console.log(modifyService);
    return (
        <div>
            <h1>manage</h1>
        </div>
    );
};

export default ManageService;