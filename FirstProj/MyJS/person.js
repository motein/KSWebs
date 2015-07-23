function readTXTFile(fileName)
{
	var fso = new ActiveXObject("Scripting.FileSystemObject");
	var file = fso.OpenTextFile(fileName, 1);
	alert("fada");
	var localString = "A";
	while (!file.AtEndOfStream)
	{
		localString += file.ReadLine()+"\n";
	}
	
	file.Close();
	return localString;
}

function SetFileContentByID()
{
	alert("fada");
}

