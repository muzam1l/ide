import languages from './languages.json'
// store = {
//     editor: {
//         code: '',
//         lang: languages[0].name,
//         stdin: ''
//     },
//     request: {
//         error: null,
//         token: null,
//         status: null,
//         output: null
//     }
// }

function getId(current, langs) {
    let id = 0
    langs.forEach(lang => {
        if (lang.name === current)
            id = lang.id
    })
    return id;
}
export function submitCodeToApi(editor) {
    let code = editor.code;
    let id = getId(editor.lang, languages);
    let stdin = editor.stdin;
    let body = JSON.stringify({
        language_id: id,
        source_code: code,
        stdin: stdin
    })
    console.log(body);
    return fetch("https://judge0.p.rapidapi.com/submissions", {
        "method": "POST",
        "headers": {
            "x-rapidapi-host": "judge0.p.rapidapi.com",
            "x-rapidapi-key": "f2d9e2e450msh008515b612b833cp1d38f5jsn0f034b44b7d3",
            "content-type": "application/json",
            "accept": "application/json"
        },
        "body": body
    });
}
export function checkStatusFromApi(token) {
    return fetch(`https://judge0.p.rapidapi.com/submissions/${token}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "judge0.p.rapidapi.com",
            "x-rapidapi-key": "f2d9e2e450msh008515b612b833cp1d38f5jsn0f034b44b7d3"
        }
    })
}