function main(){
    var app = new Vue({
        el: "#app",
        data: {
            name: "Burrhus Frederic Skinner",
            lifetime: [
                {
                    title: "Birth",
                    date: "March 20, 1904",
                    text: "Born in Susquehanna, Pennsylvania"
                },
                {
                    title: "Bachelor of Arts",
                    date: "1926",
                    text: "Obtained in English Literature, at Hamilton College"
                },
                {
                    title: "Master Degree",
                    date: "1930",
                    text: "Obtained in X, at Harvard University."
                },
                {
                    title: "Ph.D.",
                    date: "1931",
                    text: "Obtained in Psychology."
                },
                {
                    title: "Marriage",
                    date: "1936",
                    text: "Married Yvonne Blue."
                },
                {
                    title: "Chair of the Psychology Departament",
                    date: "1945-1948",
                    text: "At Indiana University."
                },
                {
                    title: "Professor",
                    date: "1948−1958",
                    text: "At Harvard University."
                },
                {
                    title: "Much Much More...",
                    date: "1958-1990",
                    text: "<a href='https://en.wikipedia.org/wiki/B._F._Skinner'>? ? ?</a>"
                },
                {
                    title: "Death",
                    date: "August 18, 1990",
                    text: "Died in Cambridge, Massachusetts"
                }
            ]
        }
    });
}

window.onload = main;