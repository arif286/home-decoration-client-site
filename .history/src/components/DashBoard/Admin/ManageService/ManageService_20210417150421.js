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
    }, [modifyService]);
    return (
      <div>
        <h3 className="text-center mt-2 mb-3">Manage Service</h3>
        <ManageServiceTable services={modifyService} />
      </div>
    );
};

export default ManageService;