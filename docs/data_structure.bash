data structure
{
    id: number | string,
    title: string,
    body: string,
    archived: boolean,
    createdAt: string,
}

data example
{
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z'
}

"Note:
For the id of each saved note, it must be unique. A tip for setting the value for the id is that you can utilize the timestamp value. To get the timestamp value in JavaScript, it's quite easy, simply write the expression +new Date(). "