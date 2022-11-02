foreach($nome in $(Get-Content -Path .\lista_nomes.txt)) {
    Write-Output "O nome  $nome"

    if ($nome -eq "Kobayashi") {
      Write-Output "Encontrou $nome"
      continue
    } else {
    $outrosNomes++
    }
}
    Write-Output "O numero de pessoas eh $outrosNomes" 
    



