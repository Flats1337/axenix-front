const requestOptions = {
    method: "GET",
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
    }
}

export async function apiAuth(username, password) {
    return await fetch(`/api/auth?username=${username}&password=${password}`, requestOptions).then(response => response.json())
}

export async function apiCheckToken(token) {
    return await fetch(`/api/checkToken?token=${token}`, requestOptions).then(response => response.json())
}

