$imgs = Get-ChildItem * -Include '*.png','*.jpg','*.webp','*.avif'
foreach ($img in $imgs)
{
    if ($img.Extension -ne '.jpg') # convert to jpg
    {
        $newname = $img.basename + '.jpg' 
        magick $img.name $newname
        Remove-Item $img
        $img = Get-ChildItem $newname
    }
    if ($img.Length -gt 50000) #shrink and reduce quality
    {
        magick $img.name -resize 450x450 -strip -interlace Plane -quality 50 $img.name
    }
}
