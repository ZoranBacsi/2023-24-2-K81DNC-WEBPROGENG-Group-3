<?php

?>

<form method="post">
    <label for="artist">Artist:</label><br>
    <input id="artist" type="text" name="artist" value=""><br>
    <label for="title">Title:</label><br>
    <input id="title" type="text" name="title" value=""><br>
    <label for="length">Length:</label><br>
    <input id="length" type="text" name="length" value=""><br>
    <label for="year">Year:</label><br>
    <input id="year" type="text" name="year" value=""><br><br>
    <input type="submit" name="submit" value="Add Song">
</form>

<table style="border: 1px solid black; border-spacing: 0px;">
    <tr>
        <th style="border: 1px solid black; padding: 5px;">Artist</th>
        <th style="border: 1px solid black; padding: 5px;">Title</th>
        <th style="border: 1px solid black; padding: 5px;">Length</th>
        <th style="border: 1px solid black; padding: 5px;">Year</th>
    </tr>

    <tr>
        <td style="border: 1px solid black; padding: 5px; text-align: center;" colspan="4">
            Total play time: 00:00
        </td>
    </tr>
</table>

<h3>Retro Songs</h3>
