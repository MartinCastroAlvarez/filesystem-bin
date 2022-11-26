# File System Management

![wallpaper](./wallpaper.jpg)

## 1 Local File System

#### 1.1 Extracting the direcory name of a file.
```bash
>>> fs.path README.md 
/home/martinalejandrocastroalvarez/filesystem
```

#### 1.2 Extracting the name of a file.
```bash
>>> fs.name README.md 
README
```

#### 1.3 Extracting the extensions of a file.
```bash
>>> fs.ext README.md 
md
```

#### 1.4 Listing files in a directory (including the full path and supporting blank spaces)
```bash
>>> fs.files | head -3
/home/martinalejandrocastroalvarez/filesystem/s3.size
/home/martinalejandrocastroalvarez/filesystem/s3.ls
/home/martinalejandrocastroalvarez/filesystem/s3.get
```

#### 1.5 Listing subdirectories (including the full path and supporting blank spaces)
```bash
>>> fs.dirs /tmp | head -3
/tmp/gimp
/tmp/gimp/2.10
/tmp/yarn--1663892367587-0.7886320579002157
```

#### 1.6 Getting the size of a file
```bash
>>> fs.size wallpaper.jpg 
1274698
```

#### 1.7 Calculating the hash of a file
```bash
>>> fs.sha256 wallpaper.jpg 
de55d0d07ab1dc397166e1ebbfd5ac4b535bdb7593e42bd0a9bf45e48e178a03
```

#### 1.8 Nornalising the name of the files in a directory and removing duplicates.
```bash
>>> fs.norm <directory>
```

#### 1.9 Extracting the full path of a file or directory.
```bash
>>> fs.full wallpaper.jpg 
/home/martinalejandrocastroalvarez/filesystem/wallpaper.jpg
```

#### 1.10 Filtering a list of files from stdin.
```bash
>>> fs.files | fs.filter FILES
/home/martinalejandrocastroalvarez/filesystem/fs.map
/home/martinalejandrocastroalvarez/filesystem/fs.filter
>>> fs.files | fs.filter -v FILES
/home/martinalejandrocastroalvarez/filesystem/s3.size
/home/martinalejandrocastroalvarez/filesystem/s3.ls
/home/martinalejandrocastroalvarez/filesystem/s3.get
```

#### 1.11 Applying a function to a files.
```bash
>>> fs.files | fs.map fs.sha256  | head -3 
c8a96740c1d6aaf2c3590e41e3df38f599ea7d6625fbbf34835e0c52ff87eefb
0b976ce2e726c04857197574b173b7e35cc13b1da82091f434fb9236a81fe8f4
a3d66cf278f7e2e4499d861fee27ff755c5f5aadf46e1b75cb38eb06dd0171e8
```

#### 1.12 Finding images in directory.
```bash
fs.img /home/martinalejandrocastroalvarez/filesystem/
/home/martinalejandrocastroalvarez/filesystem/wallpaper.jpg
```

#### 1.13 Finding Python files in directory.
```bash
fs.py /tmp/a
```

#### 1.14 Finding Typescript files in directory.
```bash
fs.ts /tmp/a
```

#### 1.15 Finding Javascript files in directory.
```bash
fs.ts /tmp/a
```

#### 1.16 Replacing the contents of a file using regexp.
```bash
>>> fs.files /tmp | fs.filter -i IPSUM | fs.replace LOREM DOLOR 
/tmp/a.txt:
  [x] LOREM IPSUM
  [✔] DOLOR IPSUM
```

#### 1.17 Grepping in multiple files recursively
```bash
>>> fs.grep apply
Definition.ts:47:    public apply(): void {
Cursive.ts:40:    public apply(): void {
```

#### 1.17 Listing files that contain a given string
```bash
>>> fs.grep apply
Cursive.ts
Definition.ts
```

## 2 AWS S3

#### 2.1 Listing buckets in AWS S3
```bash
s3.buckets
```

#### 2.2 Listing files in an AWS S3 bucket
```bash
s3.ls s3://<bucket>
```

#### 2.3 Getting the size of a file in AWS S3
```bash
s3.size s3://<bucket>/<key>
```

#### 2.4 Posting the content of the current directory to an AWS S3 bucket and key
```bash
s3.post s3://<bucket>/<key>/
```

#### 2.5 Downloading the content of an AWS S3 bucket and key to the current directory
```bash
s3.get s3://<bucket>/<key>/
```

#### 2.6 Removing a bucket and key from AWS S3
```bash
s3.rm s3://<bucket>/<key>/
```

#### 2.7 Moving a key from one place to another in AWS S3
```bash
s3.mv s3://<bucket>/<key>/ s3://<bucket>/<key>
```
