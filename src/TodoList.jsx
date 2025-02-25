export default function TodoList() {
    const avatar = "https://i.imgur.com/yXOvdOSs.jpg"
    const describtion = "Hedy Lamarr"
    const name = "Gregorio Y. Zara"
    const person = {
        name: "Gregorio Y. Zara",
        theme: {
            backgroundColor: "black",
            color: "pink"
        }
    }
    
    let today = new Date()
    function formatDate(date) {
        return new Intl.DateTimeFormat(
            "en-US",
            {weekday: "long"}
        ).format(date)
    }
    return (
      <div style={person.theme}>
        <h1>{person.name} Todos</h1>
        <img 
          src={avatar} 
          alt={describtion}
          className="photo" 
            />
            <h1>todo kist for {formatDate(today)}</h1>
            <ul style={{
                backgroundColor: "blue",
                color: "white"
        }}>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve the spectrum technology</li>
            </ul>
            <h1>{name}</h1>
      </div>
    );
  }
  