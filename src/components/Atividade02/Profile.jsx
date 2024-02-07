function getImageUrl(person, size) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
  }
  
  function sizeChooser(size) {
    if (size < 90) {
     return 's'}
    else {
        console.log(size)
     return 'b'
     
}
}

  function Avatar({ person, size }) {
    return (
        <div>
            <h2>{person.name} no tamanho {size}</h2>
      <img
        className="avatar"
        src={getImageUrl(person, sizeChooser(size))}
        alt={person.name}
      />
      </div>
    );
  }
  
  export function Profile() {
    return (
        <div className="grid grid-cols-4 gap-4 my-3">
      <Avatar
        person={{ 
            name: 'Gregorio Y. Zara', 
            imageId: '7vQD0fP'
        }}
        size={40}
      />
      <Avatar
        person={{ 
            name: 'Gregorio Y. Zara', 
            imageId: '7vQD0fP'
        }}
        size={70}
      />
      <Avatar
        person={{ 
            name: 'Gregorio Y. Zara', 
            imageId: '7vQD0fP'
        }}
        size={100}
      />
      <Avatar
        person={{ 
            name: 'Gregorio Y. Zara', 
            imageId: '7vQD0fP'
        }}
        size={200}
      />
      </div>
    );
  }