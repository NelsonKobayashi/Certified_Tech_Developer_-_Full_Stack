foreach($nome in $(Get-Content -Path .\lista_nomes.txt)) {

$procurado = "Pedro"
$numeroDePessoas++

if ($nome -eq $procurado) {
    Write-Output "Encontrou $nome"
  } else {
     $outrosNomes++
  }

}

Write-Output "Tem $numeroDePessoas pessoas, $outrosNomes que não são $procurado."
