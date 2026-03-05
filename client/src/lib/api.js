const API = '/api';

function getToken() {
  return localStorage.getItem('intelera_admin_token');
}

async function request(path, options = {}) {
  const url = path.startsWith('http') ? path : `${API}${path}`;
  const headers = { 'Content-Type': 'application/json', ...options.headers };
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(url, { ...options, headers });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || data.message || res.statusText);
  return data;
}

export const api = {
  get: (path) => request(path),
  post: (path, body) => request(path, { method: 'POST', body: JSON.stringify(body) }),
  put: (path, body) => request(path, { method: 'PUT', body: JSON.stringify(body) }),
  patch: (path, body) => request(path, { method: 'PATCH', body: JSON.stringify(body) }),
  delete: (path) => request(path, { method: 'DELETE' }),
};

export const auth = {
  login: (email, password) => api.post('/auth/login', { email, password }),
  me: () => api.get('/auth/me'),
  logout: () => localStorage.removeItem('intelera_admin_token'),
  setToken: (token) => localStorage.setItem('intelera_admin_token', token),
  getToken,
  isLoggedIn: () => !!getToken(),
};

export default api;
