<?php
// declare(strict_types= 1);

// 1. Task - Factorial with cycle, recursive function
function fact_rec(int $n)
{
    if ($n == 0)
        return 1;
    return $n * fact_rec($n - 1);
}

function fact_c($n)
{
    $r = 1;
    for ($i = 2; $i <= $n; $i++)
        $r *= $i;
    return $r;
}
?>
<h3>Task 1. - Factorial with cycle, recursive function </h3>
<?= fact_rec(5) . "<br>" ?>
<?= fact_c(5) . "<br>" ?>

<h3>Task 2. - "Hello World" in all sizes</h3>
<?php
for ($i = 1; $i <= 6; $i++) {
    echo "<h{$i}> Hello World!</h{$i}>";
}
?>
<h3>Task 3. - Array Functions</h3>
<?php
$t = [1, 2, 3, 4, 5, 6, 7];
// print_r($t);
// var_dump($t);
// array_map(callable, array) <> array_filter(array,callable)
print_r(array_map(function ($x) {
    return $x * $x; }, array_filter($t, function ($x) {
        return $x % 2 == 0; })));

// From PHP 7.4 -- Could user arrow functions
print_r(array_map(fn($x) => $x * $x, array_filter($t, fn($x) => $x % 2 == 0)));
?>
<h3>Task 4. - Iterate arrays</h3>
<?php
function array_every_1(array $arr, callable $fn): bool
{
    foreach ($arr as $e)
        if (!$fn($e))
            return false;
    return true;
}
$test1 = [2, 4, 8, 0, -4];
$test2 = [4, 3, 0, 2, -4];

function array_every_2(array $arr, callable $fn): bool
{
    reset($arr);
    while ($e = current($arr)) {
        if (!$fn($e))
            return false;
        next($arr);
    }
    return true;
}

function test_even(int $n): bool
{
    return !($n % 2);
}

var_dump(array_every_1($test1, "test_even"));
var_dump(array_every_1($test2, "test_even"));
var_dump(array_every_2($test1, "test_even"));
var_dump(array_every_2($test2, "test_even"));
?>
<h3>Task 5. - shorten form of cycles</h3>
<?php $errors = ["Syntax Error", "Stack Overflow", "Out of Memory"]; ?>
<ul>
    <?php foreach ($errors as $e): ?>
        <li>
            <?= $e ?>
        </li>
    <?php endforeach ?>
</ul>

<h3>Task 6. - Q&A</h3>
<?php
$bank = [
    [
        "question" => " What is it good for?",
        "answers" => [
            "a" => "To make Love, not war",
            "b" => "Absolutely nothing",
            "c" => "Give you my heart",
            "d" => "Just because"
        ],
        "correct_answer" => "b"
    ],
    [
        "question" => " Are happy, Vincent?",
        "answers" => [
            1 => "Tell me again, you MTF",
            2 => "Yes, we are happy",
            3 => "Cheeseburger"
        ],
        "correct_answer" => 2
    ]
]
?>
<?php foreach ($bank as $id => $q): ?>
    <b><?= $q["question"] ?></b><br>
    <?php foreach ($q["answers"] as $sign => $text): ?>
        <input type="radio" name="q<?= $id ?>" value="<? $sign ?>" <?= $sign == $q["correct_answer"] ? "checked" : "" ?> disabled> <?= $sign . ".)". $text ?><br>
    <?php endforeach ?>    
<?php endforeach ?>