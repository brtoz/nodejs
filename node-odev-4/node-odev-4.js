// Dosya Olusturma

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000},', 'utf-8', (err, data) => {
    if (err) console.log('error');
    else console.log('created');
})

// Dosya Okuma

fs.readFile('employees.json', 'utf-8', (err, data) => {
    if (err) console.log('error');
    else console.log(data);
})

// Dosya Günceleme

fs.appendFile('employees.json', '\n{"name":"Görkem","salary": 2000},', 'utf-8', (err, data) => {
    if (err) console.log('error');
    else console.log('updated');
})

// Dosya silme

fs.unlink('employees.json', (err, data) => {
    if (err) console.log('error');
    else console.log('deleted');
})