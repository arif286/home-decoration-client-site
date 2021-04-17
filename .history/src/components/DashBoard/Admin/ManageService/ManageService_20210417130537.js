import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ManageService.css';
import ManageServiceTable from './ManageServiceTable/ManageServiceTable';

const ManageService = () => {
    const [modifyService, setModifyService] = useState([]);
    useEffect(() => {
        axios
          .get("https://interior-design-service.herokuapp.com/services")
          .then((res) => setModifyService(res.data))
          .catch((err) => console.log(err));
    }, []);
    return (
      <div>
        <ManageServiceTable services={modifyService} />
      </div>
    );
};

export default ManageService;