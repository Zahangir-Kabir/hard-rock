fetch ('https://api.lyrics.ovh/suggest/summer')
.then (response => response.json())
.then (data => {

    console.log(data)
})