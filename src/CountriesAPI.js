export const Flags = () => {
    return fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            return data.map((country, idx) => {
                return {
                    id: idx,
                    day: idx + 1,
                    name: country.name.common,
                    latlng: country.latlng,
                    png: country.flags.png,
                    svg: country.flags.svg,
                    emoji: country.flag
                }
            })
        })
}