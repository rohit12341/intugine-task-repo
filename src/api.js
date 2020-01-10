import axios from 'axios';

export default axios.create({
  baseURL: 'https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/',
  headers: {
    Authorization: 'Bearer tTU3gFVUdP',
    'Content-Type': 'application/json'
  }
});