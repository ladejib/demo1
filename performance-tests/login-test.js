import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 10 },   // Ramp-up to 50 users
    { duration: '1m', target: 10 },    // Hold 50 users
    { duration: '30s', target: 0 },    // Ramp-down
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'],    // Error rate <1%
    http_req_duration: ['p(95)<500'],  // 95% of requests <500ms
  },
};

export default function () {
  const loginRes = http.post('http://localhost:5000/login', {
    username: 'admin',
    password: 'admin123',
  });

  check(loginRes, {
    'Login successful': (r) => r.status === 200,
    'Response time OK': (r) => r.timings.duration < 1000,
  });

  sleep(1); // Simulate user think time
}
