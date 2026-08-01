function stringChop(str, size) {
  // your code here
	let res=[];
	let temp="";
	let len=str.length;
	let n=0;

	if(str=="")
	{
		return res;
    }

	for(let i=0;i<len;i++)
		{
			if(n<size)
			{
				n++;
				temp=temp+str[i];
				
            }

			else 
			{
				res.push(temp);
				temp="";
				n=0;
				
				
            }
			
        }

	  if(temp!="")
	  {
		  res.push(temp);
      }

	return res;

	
}

// Do not change the code below
//const str = prompt("Enter String.");
//const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
