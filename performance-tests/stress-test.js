import http from 'k6/http';

export const options = {
  vus: 10,          // 100 concurrent users
  duration: '2m',    // Test duration
};

export default function () {
  http.get('http://localhost:5000');
}
