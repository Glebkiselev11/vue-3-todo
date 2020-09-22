import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://api-nodejs-todolist.herokuapp.com'
});


// Отсюда мы экспортируем нужный CRUD метод и по нему делаем api запрос
async function POST(url: string, payload: object) {
	const { data } = await axiosInstance.post(url, payload, {
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	});

	return data;
};

async function POST_WITH_TOKEN(url: string, payload: object) {
	const token = `Bearer ${localStorage.getItem('authToken')}`;

	const { data } = await axiosInstance.post(
		url,
		payload,
		{
			headers: {
				Authorization: token,
				Accept: 'application/json'
			}
		}
	);
	return data;
};

async function GET_WITH_TOKEN(url: string) {
	const token = `Bearer ${localStorage.getItem('authToken')}`;

	const { data } = await axiosInstance.get(url, {
		headers: {
			Authorization: token,
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	});

	return data;
}

async function PATCH_WITH_TOKEN(url: string, payload: object) {
	const token = `Bearer ${localStorage.getItem('authToken')}`;

	const { data } = await axiosInstance.patch(url, payload, {
		headers: {
			Authorization: token,
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	});

	return data;
}

async function PUT_WITH_TOKEN(url: string, payload: object) {
	const token = `Bearer ${localStorage.getItem('authToken')}`;

	const { data } = await axiosInstance.put(url, payload, {
		headers: {
			Authorization: token,
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	});

	return data;
}

async function DELETE_WITH_TOKEN(url: string) {
	const token = `Bearer ${localStorage.getItem('authToken')}`;

	const { data } = await axiosInstance.delete(url, {
		headers: {
			Authorization: token
		}
	});
	return data;
}

export {
	POST,
	POST_WITH_TOKEN,
	GET_WITH_TOKEN,
	PATCH_WITH_TOKEN,
	PUT_WITH_TOKEN,
	DELETE_WITH_TOKEN
};
