<?php


// [ 'Z', 'Z', 'A' ]
// [ 'A', 'A', 'B']


function getCellName($firstChar = 'A')
{
	$cell = $firstChar;
	if (empty($firstChar)) {
		return 'A';
	}

	$cellArray = array_reverse(str_split($cell));

	$cellValue = array_shift($cellArray);

	if ($cellValue == 'Z') {
		$cellValue = getCellName(implode(array_reverse($cellArray))) . 'A';
	} else {
		$cellValue = implode(array_reverse($cellArray)) . chr(ord($cellValue) + 1);
	}

	return $cellValue;
}

$cell = 'A';

for ($i=1; $i < 77; $i++) { 
	$cell = getCellName($cell);
}

echo $cell;



echo PHP_EOL;