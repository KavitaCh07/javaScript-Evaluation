var arr = new Array(3);
var temp = new Array(1)
// Loop to create 2D array using 1D array
document.write("Creating 2D array <br>");
for (var i = 0; i < arr.length; i++) {
    arr[i] = [];
    temp[i]=[];
}
var h = 0;
var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Loop to initialize 2D array elements.
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
  
        arr[i][j] = s[h++];
        temp[i][j]=0;
    }
}

// Loop to display the elements of 2D array.
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++)
  
    {
        document.write(arr[i][j]+" ");
    }
    document.write("<br>");
}

//loop to get the transpose of matrix
for(var i=0;i<3;i=i+1){
  for(var j=i;j<3;j=j+1){
    temp[0][0] = arr[i][j];
    arr[i][j]=arr[j][i];
    arr[j][i]=temp[0][0];
  }
}

//to reverse each column of transpose matrix
var i=0, j=0, column=0;
while(column<3)
{
  i=0,j=3-1;
  while(i<j)
  {
    temp[0][0]=arr[i][column];
    arr[i][column]=arr[j][column];
    arr[j][column]=temp[0][0];
    i=i+1;
    j=j-1;
  }
  column=column+1;
}

document.write("<br>");


//loop to display the 90 degree left rotated array
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++)
  
    {
        document.write(arr[i][j] + " ");
    }
    document.write("<br>");
}
  