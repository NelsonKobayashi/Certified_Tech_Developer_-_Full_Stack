$sourcePath="C:\Users\Cliente\desktop\infraestrutura\teste\*"
$destinyPath="C:\Users\Cliente\desktop\infraestrutura\backup\"
$date=Get-Date -Format d-M-yyy

Copy-Item $sourcePath $destinyPath -Recurse -Verbose>"$destinyPath\log-$date.txt"
