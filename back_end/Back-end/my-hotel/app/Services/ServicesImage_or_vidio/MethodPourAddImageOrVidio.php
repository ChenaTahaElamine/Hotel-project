<?php 

namespace App\Services\ServicesImage_or_vidio;
use Illuminate\Support\Facades\Storage;
use App\Models\Image_or_vidio;
use Illuminate\Http\Request;

class MethodPourAddImageOrVidio{

    public function upload(Request $request)
    {
        $path = $request->file('imageOrVidio')->store('public/images');
        $url = Storage::url($path);
        return  $url;
    }


}