{#
 # pgAdmin 4 - PostgreSQL Tools
 #
 # Copyright (C) 2013 - 2017, The pgAdmin Development Team
 # This software is released under the PostgreSQL Licence
 #}
SELECT c.oid, conname as name,
    NOT convalidated as convalidated
    FROM pg_constraint c
WHERE contype = 'c'
{% if tid %}
    AND conrelid = {{ parent_id }}::oid
{% endif %}
