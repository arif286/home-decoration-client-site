import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ManageService.css';
import ManageServiceTable from './ManageServiceTable/ManageServiceTable';

const ManageService = () => {
    const [modifyService, setModifyService] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:5000/services")
        .then((res) => setModifyService(res.data))
        .catch((err) => console.log(err));
    }, [modifyService]);
    return (
      <div>
        <h3 className="text-center mt-2">Manage Service</h3>
        <ManageServiceTable services={modifyService} />
      </div>
    );
};

export default ManageService;