function removeString( remove )
{
   
    return remove.replace(/[aeiouà-ú]/gi,''); 
}

removeString( "ola, tudo bem?" );
console.log( removeString );