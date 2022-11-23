const profile = {
    name:"石丸",
    age:21,
    hobby:"睡眠",
    major:"哲学", 
}

const dictionary ={
    name:"名前",
    age:"年齢",
    hobby:"趣味",
    major:"専攻",
}

for (const key of Object.keys(profile)) {
    console.log("私の"+ dictionary[key] + "は" + profile[key] + "です")
}