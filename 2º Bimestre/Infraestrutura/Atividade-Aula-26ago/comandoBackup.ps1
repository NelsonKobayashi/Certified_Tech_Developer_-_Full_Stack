Test-Path -Path C:\Atividade-Aula-26ago\backup\backup.txt -PathType Leaf
$sourcePath = "C:\Atividade-Aula-26ago\paraBackup\*"
$destinyPath = "C:\Atividade-Aula-26ago\backup\"
$date = Get-Date -Format d-M-yyy

Copy-Item $sourcePath $destinyPath -Recurse -Verbose > "$destinyPath\log-$date.txt"