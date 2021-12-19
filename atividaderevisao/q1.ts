class numerointeiro
{
    private  n: number 

   constructor (n)
   {
    this.n = n
   }
  
        
    
}

function test()
{
    numero = new numerointeiro(20)

    console.log('antecessor ', numero.n -1)
    console.log('sucessor ', numero.n +1)

}
test()
