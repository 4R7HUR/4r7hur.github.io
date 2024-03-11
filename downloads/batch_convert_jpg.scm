(define (batch-convert-svg-to-thumbnail folder-path width height)
  (let* ((file-list (cadr (file-glob (string-append folder-path "/*.svg") 1))))
    (while (not (null? file-list))
      (let* ((file (car file-list))
             (file-name-no-ext (substring file 0 (- (string-length file) 4))) ; Remove .svg extension
             (jpg-file (string-append file-name-no-ext ".jpg"))) ; Corresponding JPG file
        ; Check if JPG file already exists
        (if (file-exists? jpg-file)
            (begin
              (display (string-append "Skipping existing file: " jpg-file))
              (newline))
            (begin
              ; Convert SVG to JPG
              (let* ((image (car (gimp-file-load RUN-NONINTERACTIVE file file)))
                     (drawable (car (gimp-image-get-active-layer image))))
                ; Resize image to thumbnail size
                (gimp-image-scale image width height)
                ; Export image as JPG
                (file-jpeg-save RUN-NONINTERACTIVE image drawable
                               jpg-file ; Output file name without .svg extension
                               jpg-file ; Output file name without .svg extension
                               0.9 ; Quality: 0.0 (low) to 1.0 (high)
                               0 ; Smoothing: 0 (none) to 100 (maximum)
                               TRUE ; Progressive: TRUE (yes)
                               TRUE ; Optimize: TRUE (yes)
                               "" ; Comment
                               0 ; Subsampling: 0 for best quality, 1 for 2x2, 2 for 1x2, 3 for 2x1, 4 for 1x1
                               FALSE ; Force baseline: FALSE
                               FALSE ; Save EXIF data: FALSE
                               0) ; Compression level
                (gimp-image-delete image)))
          )
        (set! file-list (cdr file-list))))))

