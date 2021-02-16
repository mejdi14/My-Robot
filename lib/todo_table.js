let header = [{
    value: "weekday",
    headerColor: "cyan",
    color: "white",
    align: "left",
    width: 20
},
{
    
    value: "score",
    width: 10,
    formatter: function (value) {
        console.log('value ' + value)
        let str = `${value}`
        return (value > 5) ? this.style(str, "green", "bold") :
            this.style(str, "red")
    }
}]

const rows = [
    {
        weekday: "Moday",
        score: 10
    },
    {
        weekday: "Tuesday",
        score: 9
    },
    {
        weekday: "Wednesday",
        score: 10
    },
    {
        weekday: "Thursday",
        score: 3
    },
    {
        weekday: "Friday",
        score: 4
    },
    {
        weekday: "Saturday",
        score: 6
    },
    {
        weekday: "Sunday",
        score: 6
    }
]

const footer = [
    "TOTAL",
    function (cellValue, columnIndex, rowIndex, rowData) {
        let total = rowData.reduce((prev, curr) => {
            return prev + curr[1]
        }, 0)
            .toFixed(2)

        return this.style(`$${total}`, "italic")
    }
]

const options = {
    borderStyle: "solid",
    borderColor: "white",
    headerAlign: "center",
    align: "left",
    color: "white",
    truncate: "...",
    width: "90%"
}
let Table = require('tty-table') 
module.exports = {
    async showTable() {
        const out = Table(header, rows, options).render()
        console.log(out); //prints output
    }
}