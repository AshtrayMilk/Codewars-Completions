function domainName(url){
    let domain_name = url.replace(/.+\/\/|www.|\..+/g, "");
    return domain_name
}