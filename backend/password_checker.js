const fs = require('fs')
const readline = require('readline');

function check_password(password){
  const stream = readline.createInterface({
    input: fs.createReadStream("./xato-net-10-million-passwords.txt", {encoding: 'utf8'}),
  });
  answer = false
  return new Promise((resolve, reject)=>{
      let answer = false
      stream.on('line',(word) =>{
          if (word.trim()=== password.trim()) {
                      answer = true;
                      resolve(answer);
                      stream.close();
          }
        })
      stream.on('close',()=>{
        resolve(answer);
        })
      })
}


if (process.argv.length <= 2) {
	console.log("Uso correcto: node password_checker.js tu_password");
	process.exit();
}

check_password(process.argv[2].trim())
            .then(response => console.log(response ? "Contraseña en la lista" : "Contraseña no en la lista"));
