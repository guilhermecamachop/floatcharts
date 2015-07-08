if ($server) {
    $dados = '';
    for ($i = 0; $i < count($server); $i++) {
        $dados .= '[' . $server[$i]['time'] . ',' . round($server[$i]['recieved'] / 1024 / 1024, 2) . ']';
        if ($i + 1 != count($server)) {
            $dados .= ',';
        }
    }
    $data[] = array('data' => $dados, 'label' => 'recebidos');
    $dados2 = '';
    for ($i = 0; $i < count($server); $i++) {
        $dados2 .= '[' . $server[$i]['time'] . ',' . round($server[$i]['sent'] / 1024 / 1024, 2) . ']';
        if ($i + 1 != count($server)) {
            $dados2 .= ',';
        }
    }
    $data[] = array('data' => $dados, 'label' => 'enviados', 'yaxis' => 2);
#aqui retorna o json
#    echo json_encode($data);
# esse daqui é o return do json
echo '[{"data":"[20:01:05,645.94],[21:01:03,648.16],[21:23:21,650.36]","label":"recebidos"},{"data":"[20:01:05,645.94],[21:01:03,648.16],[21:23:21,650.36]","label":"enviados","yaxis":2}]';
}
