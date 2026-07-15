#!/usr/bin/env bash
export PATH="$HOME/Library/Python/3.9/bin:$PATH"
mkdir -p transcripts
for f in *.mp4 *.mov *.mkv *.webm; do
  [ -e "$f" ] || continue
  base="${f%.*}"
  if [ -f "transcripts/$base.md" ]; then
    echo "Skipping $base (already transcribed)"
    continue
  fi
  whisper "$f" --model medium --language he --output_dir transcripts --output_format txt
  { echo "# $base"; echo; cat "transcripts/$base.txt"; } > "transcripts/$base.md"
  rm "transcripts/$base.txt"
done
