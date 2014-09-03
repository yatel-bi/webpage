#!/usr/bin/env python
# -*- coding: utf-8 -*-

import json
import urllib2

URL = "https://pypi.python.org/pypi/yatel/json"
INFO = json.load(urllib2.urlopen(URL))["info"]


SUBSTITUTIONS = {
    "YATEL_DOC": 'http://yatel.readthedocs.org/',
    "YATEL_FORUM": 'http://forum.getyatel.org',
    "YATEL_WIKI": 'http://wiki.getyatel.org/',

    "LAST_STABLE_VERSION": ':ref:`{} <downloads>`'.format(INFO["version"]),

    "YATEL_OLAP_REPO": 'https://bitbucket.org/yatel/yatel',
    "YATEL_OLAP_ISSUES": 'https://bitbucket.org/yatel/yatel/issues',
    "YATEL_OLAP_DOWNLOADS": 'https://pypi.python.org/pypi/yatel/',
    "YATEL_OLAP_LAST_VERSION_DEV": 'https://bitbucket.org/yatel/yatel/get/dev.tar.gz',
    "YATEL_OLAP_LAST_VERSION_STABLE": 'https://pypi.python.org/packages/source/y/yatel/yatel-{}.tar.gz'.format(INFO["version"]),
    "YATEL_OLAP_PYPI": 'https://pypi.python.org/pypi/yatel',

    "YATEL_WEBPAGE_REPO": 'https://bitbucket.org/yatel/webpage',
    "YATEL_WEBPAGE_ISSUES": 'https://bitbucket.org/yatel/webpage/issues',

}

