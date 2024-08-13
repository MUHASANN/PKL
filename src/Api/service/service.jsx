import axios from 'axios';
import config from '../config';

const apiUrl = config.API_BASE_URL;

const api = axios.create({
  baseURL: apiUrl,
});

export const getDataDevice = async () => {
    try {
      const response = await api.get('/devices/camera');
      return response.data;
    } catch (error) {
      console.error("Error fetching device data:", error);
      throw error;
    }
};

export const getDataHistory = async (page, limit, guid) => {
    try {
      const response = await api.get(`devices/data/${page}/${limit}/${guid}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching history data:", error);
      throw error;
    }
};

export const getDataDeviceCamera = async ( guid) => {
  try {
    const response = await api.get(`/devices/camera/${guid}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching history data:", error);
    throw error;
  }
};
