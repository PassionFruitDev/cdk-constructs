{ pkgs ? import <nixpkgs> {}}:
pkgs.mkShell {
    buildInputs = [
        pkgs.nodejs
        pkgs.awscli2
        #pkgs.nodePackages.aws-cdk
    ];
    shellHook = 
    ''
        alias cdk="npx aws-cdk"
    '';
}


