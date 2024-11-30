$imgs = Get-ChildItem * -Include '*.png','*.jpg'
foreach ($img in $imgs)
{
    if ($img.Length -gt 50000)
    {
        $newname = $img.basename + '.jpg'
        magick $img.name -strip -interlace Plane -quality 85% $newname
        # Remove-Item $img
    }
    # elif ($img.Extension -ne '.jpg')
    # {
    #     $newname = $img.basename + '.jpg' 
    #     magick $img.name $newname
    #     Remove-Item $img
    # }
}
