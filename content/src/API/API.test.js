import axios from 'axios';
import API from './API';

jest.mock('axios');

describe('API Class', () => {
    let api;

    beforeEach(() => {
        api = new API();
        axios.mockClear();
    });

    it('should make a GET request with correct parameters', async () => {
        const mockResponse = { data: 'response' };
        axios.mockResolvedValue(mockResponse);

        const response = await api.get('/test', { param: 'value' });

        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: api.baseURL + '/test',
            headers: expect.any(Object),
            params: { param: 'value' },
        });
        expect(response).toEqual(mockResponse);
    });

    it('should make a POST request with correct parameters', async () => {
        const mockResponse = { data: 'response' };
        const postData = { key: 'value' };
        axios.mockResolvedValue(mockResponse);
      
        const response = await api.post('/postTest', postData);
      
        expect(axios).toHaveBeenCalledWith({
          method: 'post',
          url: api.baseURL + '/postTest',
          headers: expect.any(Object),
          params: postData,
        });
        expect(response).toEqual(mockResponse);
      });
      
      it('should make a PUT request with correct parameters', async () => {
        const mockResponse = { data: 'response' };
        const putData = { key: 'value' };
        axios.mockResolvedValue(mockResponse);
      
        const response = await api.put('/putTest', putData);
      
        expect(axios).toHaveBeenCalledWith({
          method: 'put',
          url: api.baseURL + '/putTest',
          headers: expect.any(Object),
          params: putData,
        });
        expect(response).toEqual(mockResponse);
      });
      
      it('should make a DELETE request with correct parameters', async () => {
        const mockResponse = { data: 'response' };
        const deleteData = { key: 'value' };
        axios.mockResolvedValue(mockResponse);
      
        const response = await api.delete('/deleteTest', deleteData);
      
        expect(axios).toHaveBeenCalledWith({
          method: 'delete',
          url: api.baseURL + '/deleteTest',
          headers: expect.any(Object),
          params: deleteData,
        });
        expect(response).toEqual(mockResponse);
      });
      

    it('should handle errors correctly', async () => {
        const errorMessage = 'Network error';
        try {
            axios.mockRejectedValue(new Error(errorMessage));
        } catch (error) {
            await expect(api.get('/test')).rejects.toThrow(errorMessage);
            expect(error).toBe(errorMessage)
        }
    });

    it('should set headers correctly', () => {
        const headers = api.setHeaders({ isMultipart: true, headers : {'Header1': 'test-value'} });
        expect(headers).toHaveProperty('Content-Type', 'multipart/form-data');
        expect(headers).toHaveProperty('Header1', 'test-value');
    });

});
