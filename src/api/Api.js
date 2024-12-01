const requestOptions = {
    method: "GET",
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
    }
}

export async function apiCheckToken(token) {
    return await fetch(`/api/auth?token=${token}`, requestOptions).then(response => response.json())
}

export async function apiServerStatus(token) {
    return await fetch(`/api/serverStatus?token=${token}`, requestOptions).then(response => response.json())
}

export async function apiCreateChat(token) {
    return await fetch(`/api/createChat?token=${token}`, requestOptions).then(response => response.json())
}

export async function apiSendMessage(token, chatId, message) {
    return await fetch(`/api/message?token=${token}&chat_id=${chatId}&message=${message}`, requestOptions).then(response => response.json())
}
