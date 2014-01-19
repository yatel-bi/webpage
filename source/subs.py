#!/usr/bin/env python
# -*- coding: utf-8 -*-

import json
import urllib2

URL = "https://pypi.python.org/pypi/yatel/json"
INFO = json.load(urllib2.urlopen(URL))["info"]


SUBSTITUTIONS = {
    "YATEL_DOC": 'http://yatel.readthedocs.org/',
    "YATEL_FORUM": 'https://forum.getyatel.com.ar',
    "YATEL_WIKI": 'http://wiki.getyatel.com.ar/',

    "LAST_STABLE_VERSION": ':ref:`{} <downloads>`'.format(INFO["version"]),

    "YATEL_OLAP_REPO": 'https://bitbucket.org/yatel/yatel',
    "YATEL_OLAP_ISSUES": 'https://bitbucket.org/yatel/yatel/issues',
    "YATEL_OLAP_DOWNLOADS": 'https://bitbucket.org/yatel/yatel/downloads',
    "YATEL_OLAP_LAST_VERSION_DEV": 'https://bitbucket.org/yatel/yatel/get/dev.tar.gz',
    "YATEL_OLAP_LAST_VERSION_STABLE": INFO["download_url"],
    "YATEL_OLAP_PYPI": 'https://pypi.python.org/pypi/yatel',

    "YATEL_WEBPAGE_REPO": 'https://bitbucket.org/yatel/webpage',
    "YATEL_WEBPAGE_ISSUES": 'https://bitbucket.org/yatel/webpage/issues',

}
