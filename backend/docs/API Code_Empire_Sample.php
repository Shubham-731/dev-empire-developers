<?php
$input = array (
'rep_id' => 'salesmanager@empiredevelopers.in',
'channel_id' => 'Website',
'subject' => 'Lead from Website',
'f_name' => 'Donald',
'l_name' => 'Joe',
'email' => 'donaldjoe@gmail.com',
'phonefax' => '9986857414',
'notes' => 'I am Interested in this project.Please call me',
'project' => 'Empire Exotica',
'alert_client' => 0,
'alert_rep' => 0);

$url = 'https://cloud.paramantra.com/paramantra/api/data/new/format/json';
$api_key='FtzIDMr114Mr0MIM4pr1FALuG6';
$app_name='K1tE5';

$ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array("X-API-KEY: $api_key ","ACTION-ON: $app_name"));
    curl_setopt($ch, CURLOPT_POSTFIELDS, $input);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 300);
    curl_setopt($ch, CURLOPT_USERPWD, $api_key );
    $data_resp = curl_exec($ch);
    curl_close($ch);

echo $data_resp
?>
